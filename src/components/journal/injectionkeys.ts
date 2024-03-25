import User from './types/User'
import { InjectionKey } from 'vue'

export const userInjectionKey = Symbol() as InjectionKey<User>
