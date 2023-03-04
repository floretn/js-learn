<template>
  <h1>{{localizeFilter('Oops')}}......</h1>
  <h3>{{localizeFilter('PageNotFound')}}:(</h3>
</template>

<script>
import localizeFilter from "@/filters/localize.filter"
export default {
  methods: {localizeFilter}
}
</script>