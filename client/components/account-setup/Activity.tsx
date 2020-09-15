import React, {SyntheticEvent} from 'react'

type ActivityProps = {
  setStatus: (arg0: string) => void
  setActivity: (arg0: string) => void
}

export default function Activity(props: ActivityProps) {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    props.setStatus('texts')
  }

  return (
    <div>
      <div>'How much do you exercise per day on average, in minutes?'</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="#"
          onChange={(event) => props.setActivity(event.target.value)}
        />
      </form>
    </div>
  )
}
