/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import { RootPage } from '@payloadcms/next/views'
import config from '@payload-config'
import React from 'react'

import { importMap } from '../importMap.js'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export default function Page({ params, searchParams }: Args) {
  return (
    <RootPage config={config} importMap={importMap} params={params} searchParams={searchParams} />
  )
}