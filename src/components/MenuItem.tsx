import { useState } from 'react';

import { Button } from '../components/Button';

interface MenuItemProps {
    genre: {
        id: number;
        name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
        title: string;
    },
    itemSelected: boolean;
    onClick: () => void;
}

export function MenuItem(props: MenuItemProps) {

    return (
        <Button
            key={String(props.genre.id)}
            title={props.genre.title}
            iconName={props.genre.name}
            selected={props.itemSelected}
            onClick={props.onClick}
        />
    )
}