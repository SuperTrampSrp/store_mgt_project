"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

import { groceryItems } from "@/constants"


export function TableSelector({ value, setValue }: TableSelectorProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    aria-expanded={open}
                    className="w-52 justify-between bg-transparent text-gray-700 hover:bg-gray-300"
                    title="selectItem"
                >
                    {value
                        ? groceryItems.find((groceryItems) => groceryItems.value === value)?.label
                        : "Select Item..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search Item..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No Item found.</CommandEmpty>
                        <CommandGroup>
                            {groceryItems.map((groceryItem) => (
                                <CommandItem
                                    key={groceryItem.value}
                                    value={groceryItem.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {groceryItem.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === groceryItem.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}