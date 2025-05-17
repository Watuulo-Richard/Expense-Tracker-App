'use client'
import React from 'react';
import { ExpenseDialogForm } from './expenseForm';
import { ExpenseFormTypes } from '@/types/type';

export default function Table({expenses}:{expenses:ExpenseFormTypes[]}) {
  return (
    <>
      <section className='max-w-full px-6 md:max-w-7xl md:container md:mx-auto py-12 md:py-24'>
  <div className="flex justify-end items-center py-2 md:py-4">
    <ExpenseDialogForm />
  </div>
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="w-full overflow-auto">
      <table className="w-full text-xs sm:text-sm text-left rtl:text-right text-green-500 dark:text-gray-400 border border-green-600 overflow-hidden">
        <thead className="text-xs text-green-700 uppercase bg-transparent dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-2 py-2 sm:px-6 sm:py-3">
              Name
            </th>
            <th scope="col" className="px-2 py-2 sm:px-6 sm:py-3">
              Amount
            </th>
            <th scope="col" className="px-2 py-2 sm:px-6 sm:py-3">
              Type
            </th>
            <th scope="col" className="px-2 py-2 sm:px-6 sm:py-3">
              Date
            </th>
            <th scope="col" className="px-2 py-2 sm:px-6 sm:py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.length > 0 && expenses.map((expense) => {
              return (
                <tr key={expense.id} className="bg-transparent border dark:bg-gray-800 dark:border-gray-700 border-green-600 hover:bg-green-100 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-2 py-2 sm:px-6 sm:py-4 font-medium text-green-600 whitespace-nowrap dark:text-white"
                  >
                    {expense.name}
                  </th>
                  <td className="px-2 py-2 sm:px-6 sm:py-4">{expense.amount}</td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4">{expense.type}</td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4">{expense.id}</td>
                  <td className="px-2 py-2 sm:px-6 sm:py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              )
            })
          }
          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-2 py-2 sm:px-6 sm:py-4 font-medium text-green-600 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-2 py-2 sm:px-6 sm:py-4">White</td>
            <td className="px-2 py-2 sm:px-6 sm:py-4">Laptop PC</td>
            <td className="px-2 py-2 sm:px-6 sm:py-4">$1999</td>
            <td className="px-2 py-2 sm:px-6 sm:py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr> */}
          {/* <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-2 py-2 sm:px-6 sm:py-4 font-medium text-green-600 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-2 py-2 sm:px-6 sm:py-4">Black</td>
            <td className="px-2 py-2 sm:px-6 sm:py-4">Accessories</td>
            <td className="px-2 py-2 sm:px-6 sm:py-4">$99</td>
            <td className="px-2 py-2 sm:px-6 sm:py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  </div>
</section>
    </>
  );
}
