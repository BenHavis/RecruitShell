"use client";

import { Typography, Card, List } from "antd";
import styles from "./ai.module.css";

const { Title, Paragraph, Text } = Typography;

const features = [
  "AI-assisted candidate matching",
  "Outreach email drafting and optimization",
  "Learning modules tailored to recruiter performance",
  "Analytics dashboard for placement success",
];

export default function AIPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <Title level={2}>AI-Driven Platform</Title>
        <Paragraph>
          A preview of how AI will power recruitment: smarter matches,
          automated workflows, and insights at scale.
        </Paragraph>
      </section>

      <Card className={styles.card} title="Future Features">
        <List
          dataSource={features}
          renderItem={(item) => (
            <List.Item>
              <Text>{item}</Text>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}
