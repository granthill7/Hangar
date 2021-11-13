import React from 'react';
import { NextPage } from 'next';
import { Box, Button, Heading, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { AppLayout } from '../../components/Layout';
import { AppContainer } from '../../components/AppContainer/AppContainer';

const HelpPage: NextPage = () => (
  <AppLayout>
    <Box backgroundColor={useColorModeValue('gray.200', 'gray.900')}>
      <AppContainer>
        <HStack paddingY={12}>
          <VStack flex={1} alignItems="stretch" spacing={8}>
            <Heading>Technical Help</Heading>
            <Text>
              We&apos;re here to help you succeed this weekend! We&apos;ve got some great developers
              here and can help with a ton of technologies, even if you aren&apos;t hacking on our
              challenge.
            </Text>
            <HStack>
              <Button>Join Technical Help Queue</Button>
            </HStack>
          </VStack>
          <VStack flex={1} alignItems="stretch" spacing={8}>
            <Heading>Idea Pitch Help</Heading>
            <Text>
              Wanting to hack on our challenge? The airline business is pretty complex, so please
              come pitch your idea to us! We&apos;re here to help and will give as much feedback you
              need on your idea.
            </Text>
            <HStack>
              <Button>Join Idea Pitch Queue</Button>
            </HStack>
          </VStack>
        </HStack>
      </AppContainer>
    </Box>
    <Box paddingTop={16}>
      <AppContainer>
        <HStack>
          <VStack>
            <Heading as="h2" size="md">
              Technical Help Queue
            </Heading>
          </VStack>
          <VStack>
            <Heading as="h2" size="md">
              Idea Pitch Queue
            </Heading>
          </VStack>
        </HStack>
      </AppContainer>
    </Box>
  </AppLayout>
);

export default HelpPage;
