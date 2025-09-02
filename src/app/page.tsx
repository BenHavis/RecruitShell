"use client";

import { Layout, Typography, Button } from "antd";
import Link from "next/link";
import styles from "./page.module.css";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function Page() {
  return (
    <Layout className={styles.layout}>

      <Content className={styles.content}>
        <section className={styles.hero}>
          <Title level={1}>Recruiting Without Limits.</Title>
          <Title level={3} className={styles.subheader}>
            Speed and Scale.
          </Title>
          <Paragraph className={styles.body}>
            We’re building a new model for recruitment. One that combines revenue
            sharing, a marketing engine, a competitive broker community, and an
            AI-driven learning platform. This is recruitment rewritten for the
            modern era.
          </Paragraph>
          <Button type="primary" size="large">
            <Link href='/contact'>Get Started</Link>
          </Button>
        </section>
      </Content>

      <Footer className={styles.footer}>
        © {new Date().getFullYear()} Demo Project. All rights reserved.
      </Footer>
    </Layout>
  );
}
