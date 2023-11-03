class Script {
  process_incoming_request({ request }) {
    const channelName = '#channel';
    const channelText = `[${request.automation.name}] *${request.state}* from ${request.commit.ref} by ${request.commit.user.name}
    ${request.downloadUrl}`;

    return {
      content: {
        username: 'rocket.cat',
        text: channelText,
        channel: channelName,
      },
    };
  }
}

const blah = new Script();
blah.process_incoming_request({
  started: '2018-08-24T14:49:08.556804+00:00',
  text: 'some hardcoded stuff',
  type: 'release',
  commit: {
    created: '2023-11-03T14:54:11.860094+00:00',
    beforeSha: 'f3745b36fbfe3ed9bc9aad9e70c569c123afc2cb',
    user: {
      name: 'Marc Rambow',
    },
    note: 'another one',
    ref: 'feature/webhook',
  },
  downloadUrl:
    'https://api.ionicjs.com/apps/123/builds/456/download?artifact_type=APK&download_token=1zl9c5c77I240',
  state: 'success',
  automation: {
    nativeConfigName: 'nativeConfigName',
    name: 'test',
  },
  app: {
    name: 'Awesome App',
  },
});
