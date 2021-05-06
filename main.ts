namespace SpriteKind {
    export const Object = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(spr_mc.x)
    console.log(spr_mc.y)
})
function level1 () {
    tiles.setTilemap(tilemap`level4`)
    spr_mc.setPosition(130, 95)
    obj_key = sprites.create(img`
        . . . . . . . . . 
        . . . 5 5 5 . . . 
        . . . 5 . 5 . . . 
        . . . 5 5 5 . . . 
        . . . . 5 . . . . 
        . . . . 5 5 . . . 
        . . . . 5 5 . . . 
        `, SpriteKind.Object)
    obj_key.setPosition(183, 183)
    level = 1
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    level2()
})
function level2 () {
    tiles.setTilemap(tilemap`level5`)
}
function fn_vars () {
    if (spr_mc.vx != 0 || spr_mc.vy != 0) {
        return true
    } else {
        return false
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
        otherSprite.destroy()
    }
})
let level = 0
let obj_key: Sprite = null
let spr_mc: Sprite = null
spr_mc = sprites.create(img`
    . . . . . . . . . 
    . . . . . . . . . 
    . . . 8 8 8 . . . 
    . . . f 8 f . . . 
    . . . 8 8 8 . . . 
    . . . 8 8 8 . . . 
    . . . 8 . 8 . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(spr_mc)
controller.moveSprite(spr_mc)
level1()
game.onUpdateInterval(300, function () {
    if (fn_vars()) {
        animation.runImageAnimation(
        spr_mc,
        [img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . 8 8 8 . . . 
            . . . f 8 f . . . 
            . . . 8 8 8 . . . 
            . . . 8 8 8 . . . 
            . . . 8 . . . . . 
            `,img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . 8 8 8 . . . 
            . . . f 8 f . . . 
            . . . 8 8 8 . . . 
            . . . 8 8 8 . . . 
            . . . . . 8 . . . 
            `,img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . 8 8 8 . . . 
            . . . f 8 f . . . 
            . . . 8 8 8 . . . 
            . . . 8 8 8 . . . 
            . . . 8 . 8 . . . 
            `],
        100,
        false
        )
    }
})
