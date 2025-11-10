import { getTranslations } from 'next-intl/server'
import React from 'react'

async function page() {
  const t = await getTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )
}

export default page