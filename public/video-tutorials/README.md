# Video Tutorials Organization

## Folder Structure
Each tool has its own folder containing video files:

```
public/video-tutorials/
├── chatgpt/
│   ├── video-1-intro.mp4
│   ├── video-2-prompts.mp4
│   └── video-3-advanced.mp4
├── figma/
│   ├── video-1-basics.mp4
│   └── video-2-advanced.mp4
└── ... (other tools)
```

## Video Naming Convention
- Use descriptive names: `video-1-intro.mp4`
- Include step numbers for ordering
- Keep names short but clear
- Supported formats: .mp4, .webm, .mov

## Video Specifications
- **Resolution**: 1920x1080 (Full HD) recommended
- **Format**: MP4 (H.264) for best compatibility
- **Quality**: High quality for clear UI demonstrations
- **Duration**: 2-5 minutes per video for optimal engagement

## Adding Videos
1. Export videos from your screen recording tool
2. Name them according to the convention above  
3. Place in the appropriate tool folder
4. Update the tool data in `src/lib/data.ts`
