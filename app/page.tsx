'use client'
import Table from '@/components/table'
import React, { useEffect, useState } from 'react'
export default function Page() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const savedDataFromLocalStorage = localStorage.getItem('expenses') || '[]'
    const expensesData = JSON.parse(savedDataFromLocalStorage)
    setData(expensesData)
  }, [])
  
  return (
    <>
      <Table expenses={data}/>
    </>
  )
}