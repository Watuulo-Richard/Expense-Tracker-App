"use client"
import { motion } from "framer-motion"
import { ExpenseDialogForm } from "./expenseForm"
import type { ExpenseFormTypes } from "@/types/type"

export default function Table({ expenses }: { expenses: ExpenseFormTypes[] }) {
  return (
    <>
      <motion.section
        className="max-w-full px-6 md:max-w-7xl md:container md:mx-auto py-12 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex justify-end items-center py-2 md:py-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ExpenseDialogForm />
        </motion.div>
        <motion.div
          className="relative overflow-x-auto shadow-md sm:rounded-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.3,
          }}
        >
          <div className="w-full overflow-auto">
            <table className="w-full text-xs sm:text-sm text-left rtl:text-right text-green-500 dark:text-gray-400 border border-green-600 overflow-hidden">
              <motion.thead
                className="text-xs text-green-700 uppercase bg-transparent dark:bg-gray-700 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
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
              </motion.thead>
              <tbody>
                {expenses.length > 0 &&
                  expenses.map((expense, index) => {
                    return (
                      <motion.tr
                        key={expense.id}
                        className="bg-transparent border dark:bg-gray-800 dark:border-gray-700 border-green-600 dark:hover:bg-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        whileHover={{
                          backgroundColor: "rgba(0, 128, 0, 0.1)",
                          scale: 1.01,
                          transition: { duration: 0.2 },
                        }}
                      >
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
                          <motion.a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Edit
                          </motion.a>
                        </td>
                      </motion.tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}
