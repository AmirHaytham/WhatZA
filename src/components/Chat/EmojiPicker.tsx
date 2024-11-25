import React from 'react';

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
  onClose: () => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onSelect, onClose }) => {
  // Common emoji categories
  const emojis = {
    smileys: ['😊', '😂', '🤣', '😍', '😘', '😅', '😉', '🙂', '🤔', '😐'],
    gestures: ['👍', '👎', '👌', '✌️', '🤞', '👊', '🤝', '👏', '🙌', '👐'],
    hearts: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💖'],
    objects: ['🎉', '🎈', '🎁', '💝', '🌟', '✨', '💫', '🔥', '💯', '📸']
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-[352px]">
      {/* Categories */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {Object.keys(emojis).map(category => (
          <button
            key={category}
            className="text-xs text-[#54656f] capitalize hover:bg-[#f0f2f5] rounded px-2 py-1"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Emoji Grid */}
      <div className="grid grid-cols-8 gap-2">
        {Object.values(emojis).flat().map((emoji, index) => (
          <button
            key={index}
            onClick={() => onSelect(emoji)}
            className="text-2xl hover:bg-[#f0f2f5] rounded p-1 transition-colors"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiPicker; 