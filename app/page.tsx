'use client'
import Table from '@/components/table'
import React from 'react'

export default function page() {
  const expensesData = JSON.parse(localStorage.getItem('expenses') || '[]')
  return (
    <>
      <Table expenses={expensesData}/>
    </>
  )
}
