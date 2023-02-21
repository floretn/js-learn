class Complains {
    constructor() {
        this.complains = []
    }
    reply(complaint) {}
    add(complaint) {
        this.complains.push(complaint)
        return this.reply(complaint)
    }
}


class ProductComplaint extends Complains {
    constructor() {
        super()
        if (ProductComplaint.exists) {
            return ProductComplaint.instance
        }
        ProductComplaint.instance = this
        ProductComplaint.exists = true
    }
    reply({id, customer, details}) {
        return `Product: ${id}, ${customer}, ${details}`
    }
}

class ServiceComplaint extends Complains {
    constructor() {
        super()
        if (ServiceComplaint.exists) {
            return ServiceComplaint.instance
        }
        ServiceComplaint.instance = this
        ServiceComplaint.exists = true
    }
    reply({id, customer, details}) {
        return `Service: ${id}, ${customer}, ${details}`
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint
        if (type === 'service') {
            complaint = new ServiceComplaint()
        } else {
            complaint = new ProductComplaint()
        }
        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintRegistry()
console.log(registry.register('Ivan', 'service', 'grkel;kef;dsfdvvx'))
console.log(registry.register('Elena', 'product', 'grkel;kef;dsfdvvx'))