import { type IconType } from 'react-icons';
import { cn } from '@/lib/utils';

type SkillBadgeProps = {
    name: string;
    icon?: IconType;
    color?: string;
}

export function SkillBadge({ name, icon: Icon, color }: SkillBadgeProps) {
    return (
        <div className={cn(
            "flex items-center gap-2 rounded-lg p-2 text-sm bg-muted border",
        )}>
            {Icon && (<Icon className="h-5 w-5 text-green-500" />)}
            <span className="font-medium">{name}</span>
        </div>
    )
}
