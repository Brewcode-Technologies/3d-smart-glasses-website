import cv2
import os

# Input video path
video_path = 'public/Smoothly_transition_from_202601201607_si8ya.mp4'
output_folder = 'public/video-frames'

# Create output folder
os.makedirs(output_folder, exist_ok=True)

# Open video
cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

print(f"Video FPS: {fps}")
print(f"Total frames: {total_frames}")

frame_count = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Save frame as PNG (lossless, maximum quality)
    frame_filename = os.path.join(output_folder, f'frame-{str(frame_count + 1).zfill(3)}.png')
    # Use highest quality PNG settings
    cv2.imwrite(frame_filename, frame, [cv2.IMWRITE_PNG_COMPRESSION, 0])
    
    frame_count += 1
    if frame_count % 10 == 0:
        print(f"Extracted {frame_count}/{total_frames} frames")

cap.release()
print(f"\nDone! Extracted {frame_count} frames to {output_folder}")
