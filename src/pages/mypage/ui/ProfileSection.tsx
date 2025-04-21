'use client';

import React, { useState } from 'react';
import { Edit } from 'lucide-react';

import { Button } from '@/shared/ui/Button';

import { ProfileView } from './ProfileView';
import { ProfileEditForm } from './ProfileEditForm';

export function ProfileSection() {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    nickname: '철수',
    bio: '소개',
    birthdate: '1111-11-11',
    image: null as string | null,
  });

  const handleEditMode = () => setEditMode(!editMode);

  const handleSave = (newData: typeof profile) => {
    setProfile(newData);
    setEditMode(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-700">프로필</div>
        <Button
          variant="outline"
          onClick={handleEditMode}
          className="flex items-center gap-2"
        >
          <Edit className="h-4 w-4" />
          {editMode ? '취소' : '프로필 수정'}
        </Button>
      </div>

      {editMode ? (
        <ProfileEditForm
          profile={profile}
          onSave={handleSave}
          onCancel={handleEditMode}
        />
      ) : (
        <ProfileView profile={profile} />
      )}
    </div>
  );
}
