import Layout from "../components/Layout";

import {
  Divider,
  Heading,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Experience from "../components/Experience";
import SkillSet from "../components/SkillSet";

export default function About(): JSX.Element {
  const resumeLink =
    "https://drive.google.com/file/d/1fjxrTUREmnR_sHbeM-QrOMA4DqP1hj_o/view?usp=sharing";

  return (
    <Layout>
      <Stack>
        <Heading as="h1" color="#FF4500">
          'Tell us about yourself?'
        </Heading>
        <Text lineHeight="taller">
          Hey, I am <strong>Marcelino Gilbert Tagore</strong>. I am a Fourth
          year student, studying{" "}
          <strong>Electrical Engineering and Computer Science</strong> at
          National Tsing Hua University in Hsinchu, Taiwan. I am currently
          working on several projects related to{" "}
          <strong> Web Development</strong> and <strong> API </strong>
        </Text>
      </Stack>
      <Experience />
      <SkillSet />
      <Text my={5}>
        For more details, my resume can be downloaded{" "}
        <Link href={process.env.RESUME_URL} color="#fc909f" isExternal>
          here
        </Link>
        .
      </Text>
    </Layout>
  );
}
