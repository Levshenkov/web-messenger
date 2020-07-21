import React from 'react'
import { useSelector } from 'react-redux'
// import ReactMarkdown from 'react-markdown'
import format from 'date-fns/format'

const Messages = () => {
  const currentChannel = useSelector((s) => s.chat.currentChannel)
  const messages = useSelector((s) => s.chat.messages[currentChannel])
  return (
    <div>
      {(messages || []).map(({ id, message, email, time }) => {
        return (
          <div className="px-6 py-4 flex-1 overflow-scroll-x" key={id}>
            <div className="flex items-start mb-4">
              <div className="flex flex-col">
                <div className="flex items-end">
                  <span className="font-bold text-md mr-2 font-sans">{email}</span>
                  <span className="text-grey text-xs font-light">
                    [{format(new Date(time), 'MM/dd/yyyy H:m:s')}]
                  </span>
                </div>
                <p className="font-light text-md text-grey-darkest pt-1">{message}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Messages.propTypes = {}

export default Messages
