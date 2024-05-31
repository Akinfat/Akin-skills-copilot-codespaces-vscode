function skillMember() {
  return {
    name: 'Member',
    description: 'Member of the group',
    skills: [
      {
        name: 'Join',
        description: 'Join the group',
        action: (member) => {
          member.group = 'A';
          return `Member joined group ${member.group}`;
        },
      },
      {
        name: 'Leave',
        description: 'Leave the group',
        action: (member) => {
          member.group = null;
          return 'Member left the group';
        },
      },
    ],
  };
}