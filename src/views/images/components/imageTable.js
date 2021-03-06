import React, { Component } from 'react'
import { Table, Tag } from 'antd'
import moment from 'moment'

const TAG_COLORS = ['#87d068', '#2db7f5', '#108ee9']

const expandedRowRender = ({ tags }) => {
  const imageTags = tags.length > 0 ? tags.peek() : []
  return (
    <div>
      <ul>
        {imageTags.map(t => {
          const { id, tag, digest, pushed_at } = t
          const ramdomColor = TAG_COLORS[id % 3]
          const pushed = moment(pushed_at).format('MM/DD/YYYY HH:mm:ss')
          return (
            <li key={id} style={{ marginTop: '0.4em' }}>
              <p>
                <Tag color={ramdomColor}>{tag}</Tag> {digest} - {pushed}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

class ImageTable extends Component {
  render() {
    const { title, data, loading, langs } = this.props

    const columns = [
      {
        title: langs['image_name'],
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: langs['image_namespace'],
        dataIndex: 'namespace',
        key: 'namespace',
      },
      {
        title: langs['image_region'],
        dataIndex: 'region',
        key: 'region',
      },
      {
        title: langs['image_repo_full_name'],
        dataIndex: 'repo_full_name',
        key: 'repo_full_name',
      },
      {
        title: langs['image_created_at'],
        dataIndex: 'created_at',
        key: 'created_at',
        render: text => {
          const date = moment(text).format('MM/DD/YYYY HH:mm:ss ZZ')
          return (
            <p>
              {date}
            </p>
          )
        },
      },
    ]

    return (
      <div>
        <Table
          title={
            title
              ? () =>
                  <p>
                    {langs[title]}
                  </p>
              : null
          }
          style={{ marginBottom: '1em' }}
          scroll={{ x: 1200 }}
          pagination={false}
          loading={loading}
          rowKey="id"
          expandedRowRender={expandedRowRender}
          dataSource={data}
          columns={columns}
        />
      </div>
    )
  }
}

export default ImageTable
