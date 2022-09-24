import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  socketService,
  SOCKET_EMIT_SEND_MSG,
  SOCKET_EVENT_ADD_MSG,
  SOCKET_EMIT_SET_TOPIC,
} from '../services/socket.service'

function _ChatApp({ loggedInUser }) {
  const [msg, setMsg] = useState({ txt: '' })
  const [msgs, setMsgs] = useState([])
  const [topic, setTopic] = useState('')
//   const [isBotMode, setIsBotMode] = useState(false)
//   let botTimeout

  useEffect(() => {
    socketService.on(SOCKET_EVENT_ADD_MSG, addMsg)
    return () => {
      socketService.off(SOCKET_EVENT_ADD_MSG, addMsg)
    //   botTimeout && clearTimeout(botTimeout)
    }
  }, [])

  useEffect(() => {
    socketService.emit(SOCKET_EMIT_SET_TOPIC, topic)
  }, [topic])

  const addMsg = (newMsg) => {
    setMsgs((prevMsgs) => [...prevMsgs, newMsg])
  }

    //   const sendBotResponse = () => {
    //     // Handle case: send single bot response (debounce).
    //     botTimeout && clearTimeout(botTimeout)
    //     botTimeout = setTimeout(() => {
    //       setMsgs((prevMsgs) => [
    //         ...prevMsgs,
    //         { from: 'Bot', txt: 'You are amazing!' },
    //       ])
    //     }, 1500)
    //   }

  const sendMsg = (ev) => {
    ev.preventDefault()
    const from = loggedInUser?.fullname || 'guest'
    socketService.emit(SOCKET_EMIT_SEND_MSG, { from, txt: msg.txt })
    // if (isBotMode) sendBotResponse()
    setMsg({ txt: '' })
  }

  const handleFormChange = (ev) => {
    const { name, value } = ev.target
    setMsg((prevMsg) => ({ ...prevMsg, [name]: value }))
  }

  return (
    // <section className="chat-app">
    //   <h2>Lets Chat about {topic}</h2>

    //   <label>
    //     <input
    //       type="checkbox"
    //       name="isBotMode"
    //       checked={isBotMode}
    //       onChange={({ target }) => setIsBotMode(target.checked)}
    //     />
    //     Bot Mode
    //   </label>

    //   <div>
    //     <label>
    //       <input
    //         type="radio"
    //         name="topic"
    //         value="Love"
    //         checked={topic === 'Love'}
    //         onChange={({ target }) => setTopic(target.value)}
    //       />
    //       Love
    //     </label>

    //     <label>
    //
    //       Politics
    //     </label>
    //   </div>

    // </section>

    <section className="main-container chat-app">
      <div className="flex chat-wrapper">
        <div className=" flex chat-left-colmn">
          <div className="chat-filter">
            <select name="filter-convo">
              <option value="all">All</option>
              <option value="unread">Unread</option>
              <option value="starred">Starred</option>
            </select>
            <button className="btn btn-chat-filter">🔬</button>
          </div>

          <ul className="clean-list chat-contacts-list">
            <li>hard coded</li>
            <li>hard coded</li>
            <li>hard coded</li>
            <li>
              <input
                type="radio"
                name="topic"
                value="chat1"
                // checked={ topic === 'order._id' }
                onChange={({ target }) => setTopic(target.value)}
              />
              seller1
            </li>
            <li>
              <input
                type="radio"
                name="topic"
                value="chat2"
                // checked={ topic === 'order._id2' }
                onChange={({ target }) => setTopic(target.value)}
              />
              seller2
            </li>
          </ul>
        </div>

        <div className="flex chat-right-column">
          <div className="chat-right-header">
            <h2>Username</h2>
          </div>
          <div className="chat-current-room">
            <ul className="clean-list chat-msgs-list">
              {msgs.map((msg, idx) => (
                <li key={idx}>
                  {msg.from}: {msg.txt}
                </li>
              ))}
            </ul>

            <form onSubmit={sendMsg} className="flex chat-form">
              <input
                type="text"
                value={msg.txt}
                onChange={handleFormChange}
                name="txt"
                autoComplete="off"
                placeholder="Type a message"
              />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userModule.user,
  }
}
const mapDispatchToProps = {}

export const ChatApp = connect(mapStateToProps, mapDispatchToProps)(_ChatApp)
