import { router } from '../trpc'
import { resourcesRouter } from './resources'
import { todoRouter } from './todo'
import { userRouter } from './user'

export const appRouter = router({
  todo: todoRouter,
  user: userRouter,
  resources: resourcesRouter
})

export type AppRouter = typeof appRouter
