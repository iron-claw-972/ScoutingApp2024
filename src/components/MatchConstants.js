export const MatchStage = Object.freeze({
    "PRE_MATCH": 0,
    "AUTO": 1,
    "TELEOP": 2,
    "POST_MATCH": 3,
    "METADATA": 4,
});

export const AutoIntakePosition = Object.freeze({
    PRELOAD: 0,
    WING_1: 1,
    WING_2: 2,
    WING_3: 3,
    CENTER_1: 4,
    CENTER_2: 5,
    CENTER_3: 6,
    CENTER_4: 7,
    CENTER_5: 8,
})

export const TeleopIntakePosition = Object.freeze({
    PRELOAD: 0,
    SOURCE: 1,
    GROUND: 2
})

export const OuttakePosition = Object.freeze({
    SPEAKER: 1,
    AMP: 2,
    DROPPED: 3,
    MISSED_AMP: 4,
    TRAP: 5,
    MISSED_SPEAKER: 6,
    MISSED_TRAP: 7,
})

export const DriverStation = Object.freeze({
    AMP: 0,
    MIDDLE: 1,
    SOURCE: 2,
})

export const StartPosition = Object.freeze({
    "AMP": 0,
    "SPEAKER AMP": 1,
    "SPEAKER MIDDLE": 2,
    "SPEAKER SOURCE": 3,
    "SOURCE": 4,
})

export function getMarkerLabel(stage, type, id) {
    if (type === 0) {
        return Object.keys(OuttakePosition)[id - 1];
    } else {
        return (Object.keys(stage === MatchStage.AUTO ? AutoIntakePosition : TeleopIntakePosition)[id] || "NONE SELECTED").replace(
            "_",
            " "
        );
    }
}
