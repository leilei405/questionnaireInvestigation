import React, { FC } from 'react'
import styles from '../../styles/common.module.scss'

type PropsType = {
  title: string
  desc?: string
  css?: string
  js?: string

  children: JSX.Element | JSX.Element[]
}

const PageWrapper: FC<PropsType> = props => {
  const { title, desc = '', css = '', js = '', children } = props
  return (
    <>
      <div>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <style>{css}</style>
      </div>
      <main className={styles.container}>{children}</main>
      <script src={js} id="page-js" />
    </>
  )
}

export default PageWrapper
