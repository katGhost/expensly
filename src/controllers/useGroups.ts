// src/controllers/useGroups.ts
import { useState } from 'react';
import { Group } from '@/models/Group';

export const useGroups = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  function addGroup(group: Group) {
    setGroups(prev => [...prev, group]);
  }

  return {groups, addGroup}
}