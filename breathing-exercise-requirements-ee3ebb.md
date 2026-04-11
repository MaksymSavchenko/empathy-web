# Breathing Exercise Feature Requirements

Hover-activated box breathing exercise with visual animation and timer overlay.

## Functional Requirements

### 1. Activation
- **Trigger**: Exercise starts on mouse enter or touch start on the circle area
- **Deactivation**: Exercise stops immediately on mouse leave or touch end
- **No completion cycle**: Exercise does NOT continue after mouse leaves

### 2. Breathing Pattern (4-4-4-4 Box Breathing)
1. **Inhale**: 4 seconds - circle grows from 0.7 to 1.3 scale
2. **Hold 1**: 4 seconds - circle stays at 1.3 scale
3. **Exhale**: 4 seconds - circle shrinks from 1.3 to 0.7 scale
4. **Hold 2**: 4 seconds - circle stays at 0.7 scale
5. **Repeat**: Cycle continues until mouse leaves or timer expires

### 3. Animation Requirements
- **Smoothness**: 60fps animation using requestAnimationFrame
- **Scale range**: 0.7 (min) to 1.3 (max)
- **Seamless transitions**: No jumps between phases
  - inhale → hold1: ends at 1.3, stays at 1.3
  - hold1 → exhale: starts at 1.3, shrinks to 0.7
  - exhale → hold2: ends at 0.7, stays at 0.7
  - hold2 → inhale: starts at 0.7, grows to 1.3 (full range)

### 4. Timer
- **Total duration**: 5 minutes (300 seconds)
- **Display format**: M:SS (e.g., "4:52")
- **Countdown**: Decrements every 1 second
- **Auto-stop**: Exercise stops when timer reaches 0

### 5. UI Display (when breathing)
- **Phase text**: "Inhale", "Hold", "Exhale", "Hold" (centered overlay)
- **Timer**: Shows remaining time below phase text
- **No phase countdown**: Do NOT show "(4s)" countdown per phase

### 6. Visual Structure
- **Main circle**: Static purple center circle (w-32, no animation)
- **Outer circles**: Two animated rings that scale together
  - Large: w-64 h-64, bg-purple-600/20
  - Medium: w-48 h-48, bg-purple-600/40
- **Idle state**: When not breathing, outer circles show subtle pulse/ping animations

## Technical Implementation

### State Management
- Phase tracking: 'inhale' | 'hold1' | 'exhale' | 'hold2'
- Previous phase tracking for smooth transitions
- Phase start time (ms timestamp)
- Is breathing flag
- Timer remaining (seconds)

### Animation System
- Uses requestAnimationFrame for 60fps updates
- Direct DOM manipulation via refs (no CSS transitions on breathing circles)
- Scale calculated based on elapsed time in current phase
- Smooth interpolation between min/max scale values

### Cleanup
- Cancel animation frame on stop
- Clear timer interval on stop
- Reset scale to 1.0 when not breathing
- Return to idle pulse animation when stopped

## Visual States

### Idle (Not Breathing)
- Outer circles: Subtle CSS animations (ping 5s, pulse 10s)
- Main circle: Static with glow
- No overlay text

### Active (Breathing)
- Outer circles: Synchronized scaling animation (60fps JS-driven)
- Main circle: Static with glow
- Overlay: Phase text + timer centered on circle

## Acceptance Criteria

- [ ] Hover starts exercise within 100ms
- [ ] Mouse leave stops exercise immediately
- [ ] All 4 phases display for exactly 4 seconds each
- [ ] Both "Hold" phases display "Hold" text
- [ ] Scale smoothly transitions 0.7 → 1.3 → 0.7 without jumps
- [ ] Timer counts down correctly at 1 second intervals
- [ ] Timer displays in M:SS format
- [ ] Animation runs at smooth 60fps
- [ ] No CSS transition artifacts or glitches
- [ ] Idle pulse animation returns after stopping
