import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Card from 'react-bootstrap/Card';
import { CardFooter, CardHeader } from 'react-bootstrap';
import { CardContent } from '@mui/material';
import { Input } from '@mui/icons-material';
import Navbar from './Navbar';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await new Promise(resolve =>
                setTimeout(() => resolve({
                    name: "RESHMA K R",
                    email: "reshma.doe@example.com",
                    Mobile: "8525852287",
                    Adders: "kerela"
                }), 1000)
            );
            setProfile(response);
            setEditedProfile(response);
        };

        fetchProfile();
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedProfile(profile);
    };

    const handleSave = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProfile(editedProfile);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile(prev => ({ ...prev, [name]: value }));
    };

    if (!profile) {
        return <div>Loading...</div>;
    } else {
        return (
            <Card className="w-full max-w-md mx-auto" style={{ width: '739px', backgroundColor: 'white' }}>
                <CardHeader className="text-2xl font-bold" sx={{ backgroundColor: '#FF0000' }}>
                    PROFILE
                </CardHeader>
                <CardContent>
                    {isEditing ? (
                        <div className="space-y-4">
                            <Input
                                name="name"
                                value={editedProfile.name}
                                onChange={handleChange}
                                placeholder="Name"
                            />
                            <Input
                                name="email"
                                value={editedProfile.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            <Input
                                name="bio"
                                value={editedProfile.bio}
                                onChange={handleChange}
                                placeholder="Bio"
                            />
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <Navbar />
                            <p><strong>Name:</strong> {profile.name}</p>
                            <p><strong>Email:</strong> {profile.email}</p>
                            <p><strong>Mobile:</strong> {profile.Mobile}</p>
                            <p><strong>Address:</strong> {profile.Adders}</p>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="justify-end space-x-2">
                    {isEditing ? (
                        <>
                            <Button onClick={handleSave} fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'purple' }}>Save</Button>
                            <Button onClick={handleCancel} fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'purple' }}>Cancel</Button>
                        </>
                    ) : (
                        <Button onClick={handleEdit} fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'purple' }}>Edit</Button>
                    )}
                </CardFooter>
            </Card>
        );
    }
}

export default Profile;
