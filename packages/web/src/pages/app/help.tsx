import React from 'react';
import { NextPage } from 'next';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AppLayout } from '../../components/Layout';
import { AppContainer } from '../../components/AppContainer/AppContainer';
import { PopUpModal } from '../../components/PopupModal';

const HelpPage: NextPage = () => {
  const [type, setType] = React.useState<string | undefined>();
  const [loading, setLoading] = React.useState(true);
  const [isInQueue, setIsInQueue] = React.useState(false);

  const fetchQueueUser = async () => {
    setLoading(true);

    const res = await fetch('/user/queue');

    setIsInQueue(res.ok);
    setLoading(false);
  };

  React.useEffect(() => {
    void fetchQueueUser();
  }, []);

  return (
    <AppLayout>
      <Box>
        <AppContainer>
          <HStack paddingY={12} alignItems="flex-start">
            <VStack flex={1} alignItems="stretch" spacing={8}>
              <Heading>Technical Help</Heading>
              <Text>
                We&apos;re here to help you succeed this weekend! We&apos;ve got some great
                developers here and can help with a ton of technologies, even if you aren&apos;t
                hacking on our challenge.
              </Text>
            </VStack>
            <VStack flex={1} alignItems="stretch" spacing={8}>
              <Heading>Idea Pitch Help</Heading>
              <Text>
                Wanting to hack on our challenge? The airline business is pretty complex, so please
                come pitch your idea to us! We&apos;re here to help and will give as much feedback
                you need on your idea.
              </Text>
            </VStack>
          </HStack>
          <HStack justifyContent="center" marginTop={16}>
            {isInQueue ? (
              <VStack spacing={4}>
                <Heading>You&apos;re in the Queue</Heading>
                <Text>
                  You&apos;ll get a direct message from our bot in Discord when we are ready for you
                  to come to our booth
                </Text>
                <Button
                  colorScheme="red"
                  onClick={async () => {
                    await fetch('/user/queue', {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    });

                    await fetchQueueUser();
                  }}
                >
                  Leave the Queue
                </Button>
              </VStack>
            ) : (
              <PopUpModal
                openModalText="Join Queue"
                header="Join the Help Queue"
                openButtonProps={{ isLoading: loading }}
                errorMessage={
                  <Alert status="error" rounded="2xl">
                    <AlertIcon />
                    <AlertDescription>
                      There was an error joining the queue, please try again or come talk to us
                    </AlertDescription>
                  </Alert>
                }
                succussMessage={
                  <Alert status="success" rounded="2xl">
                    <AlertIcon />
                    <AlertDescription>
                      You have successfully joined the help queue. You will receive a direct message
                      from our bot in Discord when you can come up to our booth.
                    </AlertDescription>
                  </Alert>
                }
                onConfirm={async () => {
                  const res = await fetch('/api/queue', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      type,
                    }),
                  });

                  if (!res.ok) {
                    throw new Error();
                  }
                }}
              >
                <FormControl id="status">
                  <FormLabel>What kind of help do you need?</FormLabel>
                  <Select variant="filled" onChange={(e) => setType(e.target.value)} value={type}>
                    <option value="Tech">Technical Help</option>
                    <option value="Idea">Idea Pitch</option>
                  </Select>
                </FormControl>
              </PopUpModal>
            )}
          </HStack>
        </AppContainer>
      </Box>
    </AppLayout>
  );
};

export default HelpPage;
