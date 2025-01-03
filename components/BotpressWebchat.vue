<script setup>
import { Webchat, WebchatProvider, createClient } from '@botpress/webchat';
// import { theme } from '~/assets/theme.js'; // Your custom theme file

// Your client ID
const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

// Create the client instance
const client = createClient({ clientId });
</script>

<template>
  <div>
    <WebchatProvider :client="client" :theme="theme">
      <Webchat />
    </WebchatProvider>
  </div>
</template>
