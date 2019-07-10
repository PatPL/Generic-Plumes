#pragma strict

function Start () {
	for (var i: int = 0; i < gameObject.transform.childCount; ++i) {
		gameObject.transform.GetChild (i).localPosition = new Vector3 (i * 5, 0, 0);
	}
}