"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

const formSchema = z.object({
  searchTerm: z.string().min(1, "O campo de busca não pode estar vazio").trim(),
})

const Search = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { searchTerm: "" },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/barbershop?search=${data.searchTerm}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="searchTerm"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Faça sua busca..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </form>
    </Form>
  )
}

export default Search
