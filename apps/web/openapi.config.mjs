import { generateService } from '@wizmacau/openapi'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

generateService({
  // schemaPath: 'http://localhost:5228/swagger/v1/swagger.json',
  schemaPath: 'http://0.0.0.0:8000/openapi.json',
  outputPath: `${__dirname}/src/services`,
  namespace: 'CMS',
  projectName: 'cms',
  requestImportStatement: `import { request } from '@/lib/request';`,
})
