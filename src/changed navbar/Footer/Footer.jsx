import { ReactNode } from 'react';
import './footer.css'

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {Link as RouterLink} from "react-router-dom"

const Logo = (props) => {
  return (
    // <svg
    //   height={32}
    //   viewBox="0 0 120 28"
    //   xmlns="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
    //   {...props}>
    //  <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="" />
    // </svg>
   <RouterLink to="/"> <img src="data:image/jpeg;base64,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" alt="" width="100" /></RouterLink>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <div className='footer-container'>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2023 Flyweis . All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    </div>
  );
}