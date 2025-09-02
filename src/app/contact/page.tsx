"use client";

import { Typography, Form, Input, Button, Card } from "antd";
import styles from "./contact.module.css";

const { Title, Paragraph } = Typography;

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <Title level={2}>Contact Us</Title>
        <Paragraph>
          We’d love to hear from you. Send us a message and we’ll get back as
          soon as possible.
        </Paragraph>
      </section>

      <Card className={styles.card}>
        <Form layout="vertical">
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input placeholder="Your full name" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
            <Input placeholder="your@email.com" />
          </Form.Item>

          <Form.Item label="Message" name="message" rules={[{ required: true }]}>
            <Input.TextArea rows={4} placeholder="How can we help?" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Send
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
