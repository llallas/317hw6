import TopicList from "./TopicList";
import "./SpeakerCard.css";

export default function SpeakerCard({ speaker }) {
  return (
    <article className="speaker-card">
      <div className="speaker-image-wrapper">
        <img
          src={speaker.headshot}
          alt={`Headshot of ${speaker.name}, ${speaker.jobTitle}`}
          className="speaker-img"
        />
      </div>
      <div className="speaker-content">
        <h3 className="speaker-name">{speaker.name}</h3>
        <p className="speaker-title-company">
          {speaker.jobTitle} at{" "}
          <span className="company-name">{speaker.company}</span>
        </p>

        <div className="talk-section">
          <h4 className="talk-heading">
            Talk: &ldquo;{speaker.talkTitle}&rdquo;
          </h4>
          <p className="talk-summary">{speaker.talkSummary}</p>
        </div>

        <TopicList topics={speaker.topics} />
      </div>
    </article>
  );
}
