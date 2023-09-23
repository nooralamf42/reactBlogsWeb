import React from 'react'
import PageTemplate from '../components/PageTemplate'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import BackBtn from '../components/BackBtn'

export default function Category() {
    let path = useLocation()
    let [param, setParams] = useSearchParams()
    console.log(param.get("page"))
  return (
    <PageTemplate>
        <BackBtn/>
    </PageTemplate>
  )
}
