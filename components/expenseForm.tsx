"use client"
import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

import Image from 'next/image';
import { ExpenseFormTypes } from "@/types/type";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function ExpenseDialogForm() {
  const { register, handleSubmit, reset, formState:{errors}} = useForm<ExpenseFormTypes>({
    defaultValues: {
      id: 0,
      name: '',
      email: '',
      amount: 0,
      type: '',
    }
  })
  const [loading, setLoading] = useState(false)
  const [expenses, setExpenses] = useState<ExpenseFormTypes[]>([])
  useEffect(() => {
    const savedExpensesInLocalStorage = localStorage.getItem('expenses') || '[]'
    const expensesData = JSON.parse(savedExpensesInLocalStorage)
    setExpenses(expensesData)
  }, [])
  // Another Alternative
  // const savedExpensesInLocalStorage = localStorage.getItem('expenses') || '[]'
  // const expensesDataInfo = JSON.parse(savedExpensesInLocalStorage)

  const router = useRouter()
  function saveDataFromForm(expenseData:ExpenseFormTypes) {
    setLoading(true)
    expenseData.id = Date.now()
    expenseData.amount = Number(expenseData.amount)
    // console.log(expenseData, "Data Created😊✅👍🏾");
    const newExpenses = ([expenseData, ...expenses])
    setExpenses(newExpenses)
    localStorage.setItem('expenses', JSON.stringify(newExpenses))
    console.log(expenseData, "Data Created😊✅👍🏾");
    setTimeout(() => {
      setLoading(false)
    }, 3000);
    toast.success("Information Has Been Saved Successfully")
    reset()
    router.push('/')
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-green-600 border border-green-600 bg-transparent">Add Expense</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] md:max-w-xl bg-slate-200">

        <form onSubmit={handleSubmit(saveDataFromForm)}>
          <section className="dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center">
              <DialogHeader>
                <a
                  href="#"
                  className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                  <Image
                    className="w-24 h-24 mr-2"
                    src="/V1.svg"
                    alt="logo"
                    height={400}
                    width={400}
                  />
                  Expense Form
                </a>
              </DialogHeader>
              <div className="w-full dark:border dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-4 md:space-y-6">
                  {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Expense Form
                  </h1> */}
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        {...register("name", {required: true, minLength: {
                        value: 2,
                         message: "Name must be at least 2 characters",
                      }})}
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Watuulo Richard"
                      />
                      {errors.name?.type === "minLength" && <p className="text-red-600 text-xs">Name is Required</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                      {...register("email", {required: true})}
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                      {errors.email && <p className="text-red-600 text-xs">Email is Required</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="amount"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Amount
                      </label>
                      <input
                        {...register('amount', {required: true})}
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder="1000.UGX"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      {errors.amount && <p className="text-red-600 text-xs">Amount is Required</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="type"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Type
                      </label>
                      <input
                        {...register('type', {required: true})}
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Expense"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      {errors.type && <p className="text-red-600 text-xs">Type is Required</p>}
                    </div>
                    <DialogFooter>
                      {
                        loading ? (
                          <Button type="submit" className="w-full">
                            <Loader2 className="animate-spin"/>
                            ...Saving Info Please Wait
                          </Button>
                        ):(
                          <Button variant="outline" type="submit" className="w-full border-green-600">Save Info</Button>
                        )
                      }
                    </DialogFooter>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </DialogContent>
    </Dialog>
  );
}
