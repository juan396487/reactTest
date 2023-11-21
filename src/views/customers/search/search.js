import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const search = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Customer Search
          <DocsLink href="https://coreui.io/docs/content/typography/" />
        </CCardHeader>
        <CCardBody>
          <p>
            Search for a customer
          </p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
