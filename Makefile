release:
	cmake -H. -GNinja -B.release -DCMAKE_BUILD_TYPE=Release
	cmake --build .release

debug:
	cmake -H. -GNinja -B.debug -DCMAKE_BUILD_TYPE=Debug
	cmake --build .debug

clean:
	rm -rf .release .debug

run: release
	./.release/PathTracer
