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
          <VStack alignItems="stretch" maxWidth="30em">
            <Heading>Get Help</Heading>
            <Text>
              We&apos;re here to help you succeed this weekend! We&apos;ve got some great developers
              here and can help with a ton of technologies.
            </Text>
            <HStack>
              <Button>Join Technical Help Queue</Button>
              <Button>Join Idea Pitch Queue</Button>
            </HStack>
          </VStack>
          <Text></Text>
        </HStack>
      </AppContainer>
    </Box>
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
  </AppLayout>
);

export default HelpPage;
