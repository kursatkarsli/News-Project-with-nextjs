import React from 'react'

function ArchiveLayout({archive, latest}) {
  return (
<div className="">
    <h1 className="archive-header">News Archive</h1>
    <section className="archive-page">{archive}</section>
    <section className="archive-latest">{latest}</section>
</div>  )
}

export default ArchiveLayout