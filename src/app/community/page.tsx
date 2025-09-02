"use client";

import { Typography, Card, List } from "antd";
import styles from "./community.module.css";

const { Title, Paragraph, Text } = Typography;

const leaderboard = [
  { name: "Alex R.", placements: 12, points: 420 },
  { name: "Jordan P.", placements: 10, points: 360 },
  { name: "Sam K.", placements: 9, points: 315 },
];

const updates = [
  { id: 1, user: "Priya", text: "Shared a brief for Senior PV Engineer (SF)." },
  { id: 2, user: "Diego", text: "Closed Battery Storage PM — onboarding next week." },
  { id: 3, user: "Mina", text: "Looking for 2x Grid Interconnection Specialists." },
];

export default function CommunityPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <Title level={2}>Community Hub</Title>
        <Paragraph>
          A preview of the broker community: performance leaderboard, recent
          updates, and what’s coming next.
        </Paragraph>
      </section>

      <section className={styles.grid}>
        <Card title="Top Brokers" className={styles.card} bordered>
          <List
            dataSource={leaderboard}
            renderItem={(item) => (
              <List.Item>
                <Text strong>{item.name}</Text> — {item.placements} placements ·{" "}
                {item.points} pts
              </List.Item>
            )}
          />
        </Card>

        <Card title="Community Updates" className={styles.card} bordered>
          <List
            dataSource={updates}
            renderItem={(u) => (
              <List.Item>
                <Text strong>{u.user}</Text> — {u.text}
              </List.Item>
            )}
          />
        </Card>
      </section>

      <section className={styles.future}>
        <Title level={4} className={styles.futureTitle}>What’s Next</Title>
        <ul className={styles.futureList}>
          <li>Broker profiles with badges and tiers</li>
          <li>Discussion threads and knowledge sharing</li>
          <li>Real-time notifications for new briefs</li>
        </ul>
      </section>
    </div>
  );
}
