import { startServer } from './src/launcher'

import os from 'os'

console.log(`🚀 Starting instance on host: ${os.hostname()}`)

startServer()
setInterval(() => {}, 1 << 30)