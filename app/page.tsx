'use client'
import Table from '@/components/table'
import { ExpenseFormTypes } from '@/types/type'
import React, { useEffect, useState } from 'react'

export default function page() {
  // const [expenses, setExpenses] = useState<ExpenseFormTypes[]>([])

  // useEffect(() => {
    const savedExpensesInLocalStorage = localStorage.getItem('expenses') || '[]'
    const expensesData = JSON.parse(savedExpensesInLocalStorage)
    // setExpenses(expensesData)
  // }, [])
  return (
    <>
      <Table expenses={expensesData}/>
    </>
  )
}
