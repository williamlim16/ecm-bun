"use server"

import { Order } from "@prisma/client"
import prisma from "../../lib/prisma"
import { sleep } from "@/lib/util"

export type FormOrder = Omit<Order, "id" | "done">

export async function addOrder ({name}: FormOrder, menuId: string) {
  await sleep(1000)
  await prisma.order.create({
    data: {
      name,
      menus: {
        connect: {
          id: menuId
        }
      }
    }
  })
}

export async function getOrders () {
  await sleep(1000)
  const orders =  await prisma.order.findMany({
    include: {
      menus: true
    },
    where: {
      done: false
    }
  })
  return orders
}

