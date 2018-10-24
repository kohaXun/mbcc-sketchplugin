const os = require('os')
const path = require('path')
const util = require('util')
const fs = require('@skpm/fs')
const sketch = require('sketch')

const API_KEY = '440a5648-8de2-41b4-a85f-d5c7d5a989c9'
const API_ENDPOINT = 'https://api.mercedes-benz.com/configurator/v1/'
const action = '/photos/random'
const apiOptions = {
  'headers': {
    'Accept': 'application/json'
  }
}

const { DataSupplier, UI, Settings } = sketch

const FOLDER = path.join(os.tmpdir(), 'de.anderssen.mbcc-sketchplugin')

export function onStartup () {
  DataSupplier.registerDataSupplier('public.image', 'Random Image', 'SupplyRandomImage')
}

export function onShutdown () {
  DataSupplier.deregisterDataSuppliers()
  try {
    fs.rmdirSync(FOLDER)
  } catch (err) {
    console.error(err)
  }
}

export function onSupplyRandomImage (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  
}
