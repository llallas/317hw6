import "./TopicList.css";

export default function TopicList({ topics }) {
  return (
    <div className="topic-list-container">
      <h4 className="topic-list-title">Key Takeaways</h4>
      <ul className="topic-list">
        {topics.map((topic, index) => (
          <li key={index} className="topic-item">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
